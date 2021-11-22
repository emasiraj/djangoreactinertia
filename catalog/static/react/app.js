import { InertiaApp } from '@inertiajs/inertia-react'
import React from 'react'
import { render } from 'react-dom'

const dataset = JSON.parse(document.getElementById("page").textContent);

render(
    <InertiaApp
      initialPage={dataset}
      resolveComponent={name =>
        import(`./Pages/${name}`).then(module => module.default)
      }
    />,
    app
  );