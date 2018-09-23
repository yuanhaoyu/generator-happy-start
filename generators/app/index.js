'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the kickass ${chalk.red('generator-happy-start')} generator!`)
    );

    const prompts = [
      {
        type: 'list',
        name: 'choose',
        message: '🤔Which start do you want',
        choices: [
          {
            name: 'js+webpack2 (For js libray)',
            value: 'webpack2'
          }
        ]
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath('dummyfile.txt'),
      this.destinationPath('dummyfile.txt')
    );
  }

  install() {
    this.installDependencies();
  }
};
