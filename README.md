# base-react

A React-based front-end to connect to base-mongo-express. Part of a training repository collection. The API/backend is in the [base-mongo-express repository](https://github.com/caltemose/base-mongo-express).

## Branches


## Sequence Notes

*Note that create-react-app creates a directory - consider this before creating a git repository.*

1. Readme, .gitignore, .editorconfig, create-react-app base files, stripped create-react-app files to minimum, updated formatting to match my styles
2. Added create-react-app-with-sass for sass support.
3. Added Redux with simple reducer for hard-coded items.
4. Added React Router 4 (beta) and initial route handling.
5. App now faking loading of items through AJAX by dispatching the load request and after a delay dispatching the load complete action.
6. Created /items route and component.
7. Added header and footer components and updated styling.
8. Added redux-thunk; items now being fetched via AJAX properly. (note that because we added the proxy definition to the package.json file, you'll need to stop your dev server and restart it.)
9. Added container and component for creating items - create item form added to /items route. Also switched from using native `fetch` to `axios` to simplify error handling.
