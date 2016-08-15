'use strict'

const gulp = require('gulp')
  const sass = require('gulp-ruby-sass')
  const postcss = require('gulp-postcss')
    const sugarss = require('sugarss')
    const autoprefixer = require('autoprefixer')
  const rename = require('gulp-rename')

gulp.task('sss', () => {
  return gulp.src('slack.sss')
    .pipe(postcss([], { parser: sugarss }))
    .pipe(rename({ extname: '.scss' }))
    .pipe(gulp.dest(''))
})

gulp.task('scss', ['sss'], () => {
  return sass('slack.scss', { style: 'expanded' }).on('error', sass.logError)
    .pipe(postcss([ autoprefixer ]))
    .pipe(gulp.dest(''))
})

gulp.task('watch', () => {
  gulp.watch('*', ['scss'])
})
