// https://eslint.org/docs/user-guide/configuring
const path = require('path');

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/recommended',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    // 'standard'
    'airbnb-base',
  ],
  // required to lint *.vue files
  plugins: ['vue'],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js',
      },
    },
  },
  // add your custom rules here
  rules: {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', { js: 'never', vue: 'never' }],

    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'state', // for vuex state
          'acc', // for reduce accumulators
          'e', // for e.returnvalue
        ],
      },
    ],

    // allow debugger during development
    'no-debugger': process.env.NODE_ENV ? 2 : 1,

    // 生产环境
    'no-console': process.env.NODE_ENV ? 2 : 1,

    // 禁止使用 var 定义变量
    'no-var': 2,

    // 禁止多余分号
    'no-extra-semi': 2,

    // 关闭换行风格检测，Mac 与 windows 系统不一致
    'linebreak-style': 0,

    // 对象多行必须有尾随逗号
    'comma-dangle': [2, 'always-multiline'],

    // 函数参数最多 6 个
    'max-params': [2, 6],

    // 允许 a 标签的 href 属性里面出现 javascript:;
    // 'no-script-url': [0],

    // 允许抛出字面量类型的错误
    // TODO: 值得斟酌
    'no-throw-literal': 0,

    // 不能在 if, for, while, do...while 条件中出现赋值操作
    'no-cond-assign': 2,

    // 禁止出现未使用的变量
    'no-unused-vars': [2, { ignoreRestSiblings: true }],

    //不能出现魔术数字
    // 'no-magic-numbers': [
    //   1,
    //   { ignore: [-1, 0, 1, 8, 24, 60, 1000, 1024], ignoreArrayIndexes: true },
    // ],

    // 允许函数表达式 'function' 标识符后面不带函数名称
    'func-names': 0,

    // 允许函数表达式 'function' 标识符后面不带空格
    'space-before-function-paren': 0,

    // 因为 prettier 的原因，允许箭头函数在只有一个参数的情况下包裹在括号内
    'arrow-parens': [0, 'as-needed'],

    // 函数参数不可重新赋值但参数属性可以修改
    'no-param-reassign': [2, { props: false }],

    // 允许对象内容写在一行
    'object-curly-newline': [2, { consistent: true }],

    // 允许函数参数为函数表达式时参数换行
    'function-paren-newline': [2, 'consistent'],

    // ESLint 不限制长度，使用 Prettier 格式化处理长度问题（主要放松对 .vue 文件 template 模板内容的限制）
    'max-len': 0,

    // 允许 import 任意依赖
    // 可引入以 @ 开头的自定义 alias
    // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/imports.js
    'import/no-extraneous-dependencies': 0,

    // 允许 vue template 内标签一行写多个属性
    'vue/max-attributes-per-line': 0
  },
};
