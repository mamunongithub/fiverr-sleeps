# Markdown & HTML

> * make sure to use at least one `line-break` to separate `html` and `markdown` whenever you are using them together
> * do not **indent** html

# Utility class

## A simple grid with 2 simple class `row` & `col`
### 2 columns
```html
<div class="row">
<div class="col">

<!-- left column content -->

</div>
<div class="col">

<!-- right column content -->

</div>
</div>
```


### 3 columns
```html
<div class="row">
<div class="col">

<!-- left column content -->

</div>
<div class="col">

<!-- center column content -->

</div>
<div class="col">

<!-- right column content -->

</div>
</div>
```

## To take `text` or any `inline` / `inline-block` to center

```html
<div class="text-center">

<!-- content -->

</div>
```

## There are `3` space utils

### Vertical space (top, bottom)
```html
<div class="v-space">

<!-- content -->

</div>
```

### Horizontal space (left, right)
```html
<div class="h-space">

<!-- content -->

</div>
```
### All side space (top, right, left, bottom)
```html
<div class="space">

<!-- content -->

</div>
```

# Example

## Two column chart

```html
<div class="row">
<div class="text-center col">
<p-chart value="50"></p-chart>

### Free

Goodies 1

Goodies 2

Goodies 3

</div>
<div class="col">

# This is Heading

This is content

</div>
</div>
```

## Three column chart

```html
<div class="text-center row">
<div class="col">
<p-chart value="25"></p-chart>

### Good

Feature 1

Feature 2

</div>
<div class="col">
<p-chart value="50"></p-chart>

### Better

Feature 1

Feature 2

</div>
<div class="col">
<p-chart value="75"></p-chart>

### Best

Feature 1

Feature 2

</div>
</div>
```

## Pros & Cons

```html
<div class="row">
<div class="col">
<div class="pros-header">Pros</div>
<div class="pros-item">Pros 1</div>
<div class="pros-item">Pros 2</div>
<div class="pros-item">Pros 3</div>
</div>
<div class="col">
<div class="cons-header">Cons</div>
<div class="cons-item">Cons 1</div>
<div class="cons-item">Cons 2</div>
<div class="cons-item">Cons 3</div>
</div>
</div>
```

## Two column product

```html
<div class="row">
<div class="text-center col">

![Picture](/img/picture.png)

<div class="v-space">
<a class="buy-button" href="https://example.com">Buy now</a>
</div>
</div>
<div class="col">

# This is Heading

This is content

</div>
</div>
```


## Genaral Note

```html
<div class="row">
<div class="col">
<h3 class="rate">9/10</h3>
</div>
<div class="col">

### This is the note

<a class="buy-button" href="https://example.com">Buy now</a>
</div>
</div>
```

## Product table

```html
<table class="product-table">
<tbody>
<tr>
<td colspan="2">

![Picture](/img/picture.png)

</td>
</tr>
<td>Modal</td>
<td>This is Model</td>
</tr>
</tr>
<td>Speed</td>
<td>This is Speed</td>
</tr>
</tr>
<td>Power</td>
<td>This is Power</td>
</tr>
</tr>
</tbody>
</table>
```