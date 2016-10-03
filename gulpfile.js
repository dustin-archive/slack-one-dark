const gulp = require('gulp')
  const sass = require('gulp-sass')
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
  return gulp.src('slack.scss')
    .pipe(sass({ style: 'expanded' }).on('error', sass.logError))
    .pipe(postcss([ autoprefixer ]))
    .pipe(gulp.dest(''))
})

gulp.task('watch', () => {
  gulp.watch('*', ['scss'])
})
