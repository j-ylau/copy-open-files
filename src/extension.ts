import * as vscode from 'vscode';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('fileContentsCopier.copyFiles', async () => {
        let content = "";

        const editors = vscode.window.visibleTextEditors;
        for (const editor of editors) {
            if (editor.document.isUntitled && editor.document.getText().startsWith("// File contents:")) {
                await vscode.window.showTextDocument(editor.document);
                await vscode.commands.executeCommand('workbench.action.closeActiveEditor');
            }
        }

        const allTabs = vscode.window.tabGroups.all.flatMap(group => group.tabs);
        const workspaceFolders = vscode.workspace.workspaceFolders;
        const workspacePath = workspaceFolders ? workspaceFolders[0].uri.fsPath : '';

        for (const tab of allTabs) {
            if (tab.input instanceof vscode.TabInputText) {
                try {
                    const document = await vscode.workspace.openTextDocument(tab.input.uri);
                    
                    if (document.isUntitled) {
                        continue;
                    }

                    let relativePath = path.relative(workspacePath, document.fileName);
                    if (relativePath.startsWith('..')) {
                        relativePath = document.fileName; 
                    }

                    content += `// ${relativePath}\n\n${document.getText()}\n\n`;
                } catch (error) {
                    console.error(`Error opening document: ${error}`);
                }
            }
        }

        const newDoc = await vscode.workspace.openTextDocument({ 
            content: `${content}`, 
            language: "plaintext" 
        });
        await vscode.window.showTextDocument(newDoc);
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}