# My Age Calculator

A small, responsive **web app that shows your exact age in real time** — in years,
weeks, days, hours, minutes, seconds and even milliseconds. Type in your birth date
and the numbers keep ticking up live. Built with plain HTML, Sass and JavaScript.

## Features

- **Live age** in multiple units: years, weeks, days, hours, minutes, seconds, milliseconds
- Updates **every moment** via a live timer — watch the milliseconds run
- **One-tap clear** button for the date input
- **Responsive** layout (dedicated `responsive.scss`)
- No frameworks, no build server — just open it

## How it works

Enter your birth date in the input field. The app subtracts your birth date from the
current date and converts the difference into each unit, refreshing continuously so
the result is always up to date. Clearing the field resets the display.

## Run it

```bash
git clone https://github.com/olivierluethy/MyAgeCalculator.git
cd MyAgeCalculator
```

Open `index.html` in your browser.

## Tech

HTML · **Sass/SCSS** (compiled to `css/style.css` and `css/responsive.css`) · vanilla JavaScript.

To recompile the styles after editing the `.scss` files:

```bash
sass css/style.scss css/style.css
sass css/responsive.scss css/responsive.css
```

## License

Free to use and modify.
