# tr-ru-en

Transliteration from Russian to English

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

# Install

    npm install tr-ru-en --save

# Usage

    import translit from "tr-ru-en";
    
    expect(translit("Козырёв")).toBe("Kozyrev");

# API

    // Map of symbols
    export const map: { [index: string]: string };
    //translit-function
    export default (input: string) => string;

# Test

    npm install
    npm test

[npm-image]: https://badge.fury.io/js/tr-ru-en.svg
[npm-url]: https://npmjs.org/package/tr-ru-en
[travis-image]: https://travis-ci.org/arvitaly/tr-ru-en.svg?branch=master
[travis-url]: https://travis-ci.org/arvitaly/tr-ru-en
[daviddm-image]: https://david-dm.org/arvitaly/tr-ru-en.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/arvitaly/tr-ru-en
[coveralls-image]: https://coveralls.io/repos/arvitaly/tr-ru-en/badge.svg
[coveralls-url]: https://coveralls.io/r/arvitaly/tr-ru-en