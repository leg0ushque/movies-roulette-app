[⬅️ React Redux](react-redux.mdx)  
[Alternative Libraries ➡️](alternative-libraries.md)  

[Back to Contents 📑](../../README.md#module-additional)

# Redux Toolkit (RTK): Modern Redux Development

## Introduction

Redux Toolkit is the official, opinionated toolset for efficient Redux development. It addresses common Redux pain points by providing utilities to simplify store setup, reduce boilerplate, and implement Redux best practices by default.

## Key Features

### Simplified Store Setup

```typescript
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import moviesReducer from "./moviesReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
  },
});

// Infer types from store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
```

### Creating Slices

Slices combine reducers, actions, and action creators in one place:

```typescript
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: string;
  name: string;
  email: string;
}

interface UsersState {
  items: Record<string, User>;
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  items: {},
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.items[action.payload.id] = action.payload;
    },
    // RTK uses Immer internally - you can "mutate" state
    toggleUserActive: (state, action: PayloadAction<string>) => {
      const user = state.items[action.payload];
      if (user) {
        user.isActive = !user.isActive;
      }
    },
  },
});

export const { setUser, toggleUserActive } = usersSlice.actions;
export default usersSlice.reducer;
```

### Async Operations with createAsyncThunk

```typescript
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk("users/fetchUser", async (userId: string, { rejectWithValue }) => {
  try {
    const response = await api.getUser(userId);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // ... regular reducers
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.items[action.payload.id] = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});
```

### RTK Query for Data Fetching

```typescript
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getUser: builder.query<User, string>({
      query: (id) => `users/${id}`,
    }),
    updateUser: builder.mutation<User, Partial<User>>({
      query: ({ id, ...patch }) => ({
        url: `users/${id}`,
        method: 'PATCH',
        body: patch,
      }),
    }),
  }),
});

export const { useGetUserQuery, useUpdateUserMutation } = api;

// In your component:
function UserProfile({ id }: { id: string }) {
  const { data: user, isLoading } = useGetUserQuery(id);
  const [updateUser] = useUpdateUserMutation();

  if (isLoading) return <div>Loading...</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <button onClick={() => updateUser({ id, status: 'active' })}>
        Activate
      </button>
    </div>
  );
}
```

## Best Practices

### Normalized State Shape

Use `createEntityAdapter` for normalized state management:

```typescript
import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const usersAdapter = createEntityAdapter<User>({
  selectId: (user) => user.id,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

const usersSlice = createSlice({
  name: "users",
  initialState: usersAdapter.getInitialState({
    loading: false,
    error: null,
  }),
  reducers: {
    userAdded: usersAdapter.addOne,
    usersReceived: usersAdapter.setMany,
  },
});

// Selectors
export const { selectById: selectUserById, selectIds: selectUserIds, selectEntities: selectUserEntities, selectAll: selectAllUsers, selectTotal: selectTotalUsers } = usersAdapter.getSelectors((state: RootState) => state.users);
```

### Type-Safe Selectors

```typescript
import { createSelector } from '@reduxjs/toolkit';

const selectUserState = (state: RootState) => state.users;

export const selectActiveUsers = createSelector(
  selectAllUsers,
  (users) => users.filter(user => user.isActive)
);

// Usage with hooks
function ActiveUsersList() {
  const activeUsers = useAppSelector(selectActiveUsers);
  return (
    <ul>
      {activeUsers.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```
## BONUS
### Migration from "Vanilla" Redux

#### Before (Vanilla Redux)

```typescript
// actions.ts
const SET_USER = "SET_USER";
const setUser = (user) => ({ type: SET_USER, payload: user });

// reducer.ts
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
```

#### After (Redux Toolkit)

```typescript
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
```

### Common Pitfalls and Solutions

1. **Mutating State Outside Reducers**

```typescript
// ❌ Wrong
const Component = () => {
  const user = useSelector((state) => state.user);
  user.name = "New Name"; // Direct mutation!
};

// ✅ Correct
const Component = () => {
  const dispatch = useAppDispatch();
  const user = useSelector((state) => state.user);

  const updateName = () => {
    dispatch(updateUser({ ...user, name: "New Name" }));
  };
};
```

2. **Unnecessary Selectors**

```typescript
// ❌ Inefficient
const user = useAppSelector((state) => ({
  ...state.users.current,
  fullName: `${state.users.current.firstName} ${state.users.current.lastName}`,
}));

// ✅ Efficient
const user = useAppSelector(selectUser);
const fullName = useMemo(() => `${user.firstName} ${user.lastName}`, [user.firstName, user.lastName]);
```

### Performance Optimization

1. **Memoized Selectors**

```typescript
const selectUsersByStatus = createSelector([selectAllUsers, (_, status: string) => status], (users, status) => users.filter((user) => user.status === status));
```

2. **Skip Updates with useSelector**

```typescript
// Only re-render when relevant data changes
const userData = useAppSelector(
  (state) => state.users.items[userId],
  shallowEqual, // Use equality function
);
```

### Testing

```typescript
import { store } from "./store";
import { setUser } from "./userSlice";

describe("User slice", () => {
  it("should handle user updates", () => {
    const initialState = store.getState().user;
    const user = { id: "1", name: "John" };

    store.dispatch(setUser(user));

    const finalState = store.getState().user;
    expect(finalState.items[user.id]).toEqual(user);
  });
});
```

## Next Steps

1. Explore RTK Query for API integration
2. Learn about Redux Toolkit's middleware capabilities
3. Study performance optimization techniques
4. Practice writing tests for Redux logic

## Resources

- [Official Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [RTK Query Overview](https://redux-toolkit.js.org/rtk-query/overview)
- [Redux Style Guide](https://redux.js.org/style-guide/style-guide)
- [TypeScript Quick Start](https://redux-toolkit.js.org/tutorials/typescript)
