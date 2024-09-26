"use strict"

const { src } = require('gulp');
src('/Users/mac/Desktop/pm_23_19.html');

src('/Users/mac/Desktop/pm_23_19.html').pipe(dest('dist'));

const { dest } = require('gulp');
src('/Users/mac/Desktop/pm_23_19.html').pipe(dest('dist'));

const { watch } = require('gulp');
watch('/Users/mac/Desktop/pm_23_19/scss/*.scss', scss_task);

const { series } = require('gulp');
const build = series(html_task, scss_task, js_task);
exports.default = build;

const { parallel } = require('gulp');

const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
// Таска для компіляції SCSS у CSS
const scss_task = () => {
return src('/Users/mac/Desktop/pm_23_19/scss/*.scss') // Вибір файлів SCSS
.pipe(sass()) // Компіляція SCSS у CSS
.pipe(cssnano()) // Мінімізація CSS
.pipe(rename({suffix: '.min'})) // Додавання суфіксу .min до файлу
.pipe(dest('dist/css')); // Збереження результату
};

