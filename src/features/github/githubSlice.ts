import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GitHubState {
  repoUrl: string;
  issues: Issue[];
}

interface Issue {
  id: number;
  title: string;
  state: string;
  assignee?: string;
}

const initialState: GitHubState = {
  repoUrl: '',
  issues: [],
};

const githubSlice = createSlice({
  name: 'github',
  initialState,
  reducers: {
    setRepoUrl: (state, action: PayloadAction<string>) => {
      state.repoUrl = action.payload;
    },
    setIssues: (state, action: PayloadAction<Issue[]>) => {
      state.issues = action.payload;
    },
    moveIssue: (state, action: PayloadAction<MoveIssuePayload>) => {
      // Handle moving issue logic
    },
  },
});


export const { setRepoUrl, setIssues, moveIssue } = githubSlice.actions;

export default githubSlice.reducer;

interface MoveIssuePayload {
  sourceIndex: number;
  destinationIndex: number;
  destinationState: string;
}