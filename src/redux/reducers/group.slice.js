import { createSlice } from '@reduxjs/toolkit';

const initialState = {
       myGroups: [], 
       allGroups: [], 
       allCategories:[],
       allSectionVideos:[],
       categoryVideos:[],
       categoryChapters:[],
       chapterSessions:[],
       presentOpenMenu:null,
       presentOpenChapter:null,
       presentOpenSession:null,
       requestedSection:null,
       publicGroups: [], 
       privateGroups: [],
       groupMembers: [], 
       employeer: {}, 
       message: '',
      isLoading: false,
};

const groupSlice = createSlice({
  name: 'group',
  initialState,
  reducers: {
    saveMyGroup: (state, action) => {
        state.myGroups = action.payload;
    },
    saveAllGroup: (state, action) => {
        state.allGroups = action.payload;
    },
    setRequestedSection: (state, action) => {
      state.requestedSection = action.payload;
   },
    saveSectionVideos: (state, action) => {
      state.allSectionVideos = action.payload;
  },

saveCategoryVideos: (state, action) => {
  state.categoryVideos = action.payload;
},
saveCategoryChapters: (state, action) => {
  state.categoryChapters = action.payload;
},
saveChapterSessions: (state, action) => {
  state.chapterSessions = action.payload;
},
savePresentOpenMenu: (state, action) => {
  state.presentOpenMenu = action.payload;
},
savePresentOpenChapter: (state, action) => {
  state.presentOpenChapter = action.payload;
},
savePresentOpenSessions: (state, action) => {
  state.presentOpenSession = action.payload;
},
  saveCategories: (state, action) => {
    state.allCategories = action.payload;
},
    savePublicGroup: (state, action) => {
        state.publicGroups = action.payload;
    },
    savePrivateGroup: (state, action) => {
        state.privateGroups = action.payload;
    },
    saveGroupMembers: (state, action) => {
      state.groupMembers = action.payload;
  },
    saveEmployeer: (state, action) => {
      state.employeer = action.payload;
  },
    isItLoading: (state, action) => {
      state.isLoading = action.payload;
  },
    clearGroup: (state) => {
      return {
        ...initialState,
      };
    },
  },
});

const { actions, reducer } = groupSlice;

export const {
 saveMyGroup,
 saveAllGroup,
 saveSectionVideos,
 saveCategoryVideos,
 saveCategoryChapters,
 savePresentOpenMenu,
 savePresentOpenChapter,
 savePresentOpenSessions,
 saveChapterSessions,
 savePublicGroup,
 saveCategories,
 savePrivateGroup,
 saveGroupMembers,
 saveEmployeer,
 setRequestedSection,
 isItLoading,
 clearGroup
} = actions;

export default reducer;


