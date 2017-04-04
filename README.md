# base-react

A React-based front-end to connect to base-mongo-express. Part of a training repository collection. The API/backend is in the [base-mongo-express repository](https://github.com/caltemose/base-mongo-express).

## Branch Notes

*Note that create-react-app creates a directory - consider this before creating a git repository.*

The numbers below correspond to branch names (ie, Note 1 corresponds to branch 001-create-react-app-base).

1. Readme, .gitignore, .editorconfig, create-react-app base files, stripped create-react-app files to minimum, updated formatting to match my styles
2. Added create-react-app-with-sass for sass support.
3. Added Redux with simple reducer for hard-coded items.
4. Added React Router 4 (beta) and initial route handling.
5. App now faking loading of items through AJAX by dispatching the load request and after a delay dispatching the load complete action.
6. Created /items route and component.
7. Added header and footer components and updated styling.
8. Added redux-thunk; items now being fetched via AJAX properly. (note that because we added the proxy definition to the package.json file, you'll need to stop your dev server and restart it.)
9. Added container and component for creating items - create item form added to /items route. Also switched from using native `fetch` to `axios` to simplify error handling.
10. Refactored so Items listing uses editable items components that use a base ItemForm component. Refactored create items form to use the same ItemForm component. Still to do: disabling forms during API actions and showing errors when API actions fail.
11. Refactored ItemForm component to be more generic and updated EditableItem and CreateItem accordingly. Disabled state and error state functional for CreateItem usage but not for ItemForm which requires enhancing the Redux code to provide data for items being saved and possessing errors (from API calls). NOTE: To help test disabled state of the ItemForm, I added the [sleep package](https://www.npmjs.com/package/sleep) to the API repo on the `/api/items` POST route to delay the response since without a delay the request happens so fast you cannot easily test the disabled state.
12. Updated edit-item Redux actions and reducers so EditableItem form can handle disabling (when item is being saved) and error display (when item update API calls return errors).
13. Added delete item functionality (new button in ItemForm, updated Redux actions/reducers).

## Next Steps

- Determine solution to empty the ItemForm after a new item is created.
- Determine solution to re-apply the initial value to ItemForm if an attempt is made to save the item with an empty value.
- Consider changing data structure to use byId/allIds pattern [see Redux docs on normalizing state](http://redux.js.org/docs/recipes/reducers/NormalizingStateShape.html)
