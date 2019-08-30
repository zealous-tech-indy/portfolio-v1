# Zealous Tech Portfolio

[![Netlify Status](https://api.netlify.com/api/v1/badges/31624a81-594d-4b66-acb6-eb64258e0b47/deploy-status)](https://app.netlify.com/sites/zealousindy/deploys)

In development, this deploys to https://staging.zealousindy.com

## Installation

Run `gatsby develop` in the terminal to start the dev site.

## CSS Grid

The grid on this site was replaced with a custom version, built using CSS Grid. It's a very simple 12 column grid that is disabled on mobile. To start using the grid, wrap the desired items with `grid-wrapper`. Items inside the `grid-wrapper` use the class `col-` followed by a number, which should add up to 12.

Here is an example of using the grid, for a 3 column layout:

```
<div className="grid-wrapper">
    <div className="col-4">
        <p>Content Here</p>
    </div>
    <div className="col-4">
        <p>Content Here</p>
    </div>
    <div className="col-4">
        <p>Content Here</p>
    </div>
</div>
```