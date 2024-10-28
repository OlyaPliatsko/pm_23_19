"use strict"

const { parallel, series } = require('gulp');

const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const scss_task = () => {
return src('/Users/mac/Desktop/pm_23_19/app/scss/*.scss')
.pipe(sass())
.pipe(cssnano())
.pipe(rename({suffix: '.min'}))
.pipe(dest('dist/css'));
};
 const html_task=()=>{
  return src('app/*.html').pipe(dest('dist'))
 }

const build=series(html_task, scss_task)
exports.default = build;
