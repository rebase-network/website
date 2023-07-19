import { DataProvider, AuthHelper } from '@refinedev/strapi-v4';
import { Refine, AuthBindings, Authenticated } from '@refinedev/core';

import {
  notificationProvider,
  ThemedLayout,
  ThemedLayoutV2,
  ThemedTitleV2,
  ErrorComponent,
  AuthPage,
  RefineThemes,
} from '@refinedev/antd';

import routerProvider, {
  CatchAllNavigate,
  NavigateToResource,
  UnsavedChangesNotifier,
  DocumentTitleHandler,
} from '@refinedev/react-router-v6';

import axios from 'axios';
import { ConfigProvider } from 'antd';
import { GithubFilled } from '@ant-design/icons';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import { PostList, PostCreate, PostEdit, PostShow } from '../src/pages/posts';
import { GeekdailyList, GeekdailyCreate, GeekdailyEdit, GeekdailyShow } from '../src/pages/geekdailies';

import { UserList } from '../src/pages/users';

import { CategoryList, CategoryCreate, CategoryEdit } from '../src/pages/categories';

import { TOKEN_KEY, API_URL } from './constants';
import '@refinedev/antd/dist/reset.css';
// import Logo from '../public/rebase.jpg';
import Logo from '/public/rebase.jpg';

const App: React.FC = () => {
  const axiosInstance = axios.create();
  const strapiAuthHelper = AuthHelper(API_URL + '/api/v1');

  const authProvider: AuthBindings = {
    // register: async ({ email, password, providerName }) => {
    //   return {
    //     success: true,
    //   };

    //   return {
    //     success: false,
    //     error: {
    //       name: 'Register Error',
    //       message: 'Invalid email or password',
    //     },
    //   };
    // },
    login: async ({ email, password }) => {
      try {
        const { data, status } = await strapiAuthHelper.login(email, password);
        if (status === 200) {
          localStorage.setItem(TOKEN_KEY, data.jwt);

          // set header axios instance
          axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${data.jwt}`;

          return {
            success: true,
            redirectTo: '/',
          };
        }
      } catch (error: any) {
        const errObj = error?.response?.data?.message?.[0]?.messages?.[0];
        return {
          success: false,
          error: {
            message: errObj?.mesage || 'Login failed',
            name: errObj?.id || 'Invalid email or password',
          },
        };
      }

      return {
        success: false,
        error: {
          message: 'Login failed',
          name: 'Invalid email or password',
        },
      };
    },
    logout: async () => {
      localStorage.removeItem(TOKEN_KEY);
      return {
        success: true,
        redirectTo: '/login',
      };
    },
    onError: async (error) => {
      console.error(error);
      return { error };
    },
    check: async () => {
      const token = localStorage.getItem(TOKEN_KEY);
      if (token) {
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        return {
          authenticated: true,
        };
      }

      return {
        authenticated: false,
        error: {
          message: 'Authentication failed',
          name: 'Token not found',
        },
        logout: true,
        redirectTo: '/login',
      };
    },
    getPermissions: async () => null,
    getIdentity: async () => {
      const token = localStorage.getItem(TOKEN_KEY);
      if (!token) {
        return null;
      }

      const { data, status } = await strapiAuthHelper.me(token);
      if (status === 200) {
        const { id, username, email } = data;
        return {
          id,
          username,
          email,
        };
      }

      return null;
    },
  };

  return (
    <BrowserRouter>
      <ConfigProvider theme={RefineThemes.Green}>
        <Refine
          authProvider={authProvider}
          dataProvider={DataProvider(API_URL + '/api/v1', axiosInstance)}
          routerProvider={routerProvider}
          resources={[
            {
              name: 'posts',
              list: '/posts',
              create: '/posts/create',
              edit: '/posts/edit/:id',
              show: '/posts/show/:id',
              meta: {
                canDelete: true,
              },
            },
            {
              name: 'geekdailies',
              list: '/geekdailies',
              create: '/geekdailies/create',
              edit: '/geekdailies/edit/:id',
              show: '/geekdailies/show/:id',
              meta: {
                canDelete: true,
              },
            },
            {
              name: 'categories',
              list: '/categories',
              create: '/categories/create',
              edit: '/categories/edit/:id',
            },
            {
              name: 'users',
              list: '/users',
            },
          ]}
          notificationProvider={notificationProvider}
          options={{
            syncWithLocation: true,
            warnWhenUnsavedChanges: true,
          }}
        >
          <Routes>
            <Route
              element={
                <Authenticated fallback={<CatchAllNavigate to="/login" />}>
                  <ThemedLayoutV2 Title={({ collapsed }) => <ThemedTitleV2 collapsed={collapsed} text="Rebase" />}>
                    <Outlet />
                  </ThemedLayoutV2>
                </Authenticated>
              }
            >
              <Route index element={<NavigateToResource resource="posts" />} />
              <Route path="/posts">
                <Route index element={<PostList />} />
                <Route path="create" element={<PostCreate />} />
                <Route path="edit/:id" element={<PostEdit />} />
                <Route path="show/:id" element={<PostShow />} />
              </Route>

              <Route index element={<NavigateToResource resource="geekdailies" />} />
              <Route path="/geekdailies">
                <Route index element={<GeekdailyList />} />
                <Route path="create" element={<GeekdailyCreate />} />
                <Route path="edit/:id" element={<GeekdailyEdit />} />
                <Route path="show/:id" element={<GeekdailyShow />} />
              </Route>

              <Route path="/categories">
                <Route index element={<CategoryList />} />
                <Route path="create" element={<CategoryCreate />} />
                <Route path="edit/:id" element={<CategoryEdit />} />
              </Route>

              <Route path="/users" element={<UserList />} />
            </Route>

            <Route
              element={
                <Authenticated fallback={<Outlet />}>
                  <NavigateToResource resource="geekdailies" />
                </Authenticated>
              }
            >
              <Route
                path="/login"
                element={
                  <AuthPage
                    title={'Rebase'}
                    type="login"
                    providers={[
                      {
                        name: 'github',
                        icon: <GithubFilled />,
                        label: 'Sign in with GitHub',
                      },
                    ]}
                  />
                }
              />

              <Route
                path="/register"
                element={
                  <AuthPage
                    type="register"
                    providers={[
                      {
                        name: 'github',
                        icon: <GithubFilled />,
                        label: 'Sign up with GitHub',
                      },
                    ]}
                  />
                }
              />
            </Route>

            <Route
              element={
                <Authenticated>
                  <ThemedLayoutV2>
                    <Outlet />
                  </ThemedLayoutV2>
                </Authenticated>
              }
            >
              <Route path="*" element={<ErrorComponent />} />
            </Route>
          </Routes>
          <UnsavedChangesNotifier />
          <DocumentTitleHandler />
        </Refine>
      </ConfigProvider>
    </BrowserRouter>
  );
};

export default App;
