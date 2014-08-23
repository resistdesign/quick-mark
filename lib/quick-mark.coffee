module.exports =
  activate: ->
    atom.workspaceView.command "quick-mark:convert", => @convert()

  convert: ->
    # This assumes the active pane item is an editor
    editor = atom.workspace.activePaneItem
    selection = editor.getSelection()
    qm = require './QuickMark.js'
    text = selection.getText()
    converted = qm.convert text
    selection.insertText converted
