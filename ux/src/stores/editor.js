import { defineStore } from 'pinia'

export const useEditorStore = defineStore('editor', {
  state: () => ({
    editor: '',
    content: '',
    mode: 'create',
    activeModal: '',
    activeModalData: null,
    media: {
      folderTree: [],
      currentFolderId: 0,
      currentFileId: null
    },
    checkoutDateActive: '',
    lastSaveTimestamp: null,
    lastChangeTimestamp: null,
    editors: {}
  }),
  getters: {
    hasPendingChanges: (state) => {
      return state.lastSaveTimestamp && state.lastSaveTimestamp !== state.lastChangeTimestamp
    }
  },
  actions: {}
})
