# challenge_react_typescript_material_ui
#challenge_react_typescript_material_ui

> React, typescript, Material-ui app 

## Quick Start

```
# On the terminal
git clone https://github.com/siphesande/challenge_react_typescript_material_ui.git
cd challenge_react_typescript_material_ui
cd client && npm install
npm start 
  OR
yarn start
```

This repo on the components folder has these pages:

- ValidityChecks.tsx (performs some validity checks on two JSON files)
- ShortestDistance.tsx (sorted list of the 10 rows from data.json with the shortest distance
from the latitude and longitude)
- UnionArray (single array containing the ​ union ​ of the two arrays)

All the functions are written on task file inside tasks folder, and they are exported the relevant files/components

I chose not to use Redux (or Context API) for state management because this application is not large, not having many props passed to other components and only performs simple actions and does not require server-side rendering.