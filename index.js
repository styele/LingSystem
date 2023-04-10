'use strict';

const EmbedBuilder = require('./SRC/Structures/EmbedBuilder');
const Colors = require("./SRC/Structures/Colors");
const Azkar = require("./SRC/Structures/Azkar");
const { Data } = require("./SRC/Structures/Database");


const version = require("./package.json").version

setTimeout(() => {
    console.log(`\n
|--------------------------------------------------------------------------------------------|
|#    ##################################################################################    #|
|#########            ##########          ##########          ##########            #########|
|#    ##################################################################################    #|
|################################        LING SYSTEM          ###############################|
|#    #################                                                 ################    #|
|#    ##                                                                              ##    #|
|############### Azkar  -   -   -   -   -  ${version}  -   -   -   -   -   -   Colors ############|
|#    ##                                                                              ##    #|
|###############                                                                 ############|
|#    ################# EmbedBuilder                           Database ################    #|
|################################         ---------           ###############################|
|#    ##################################################################################    #|
|#########            ##########          ##########          ##########            #########|
|#    ##################################################################################    #|
|--------------------------------------------------------------------------------------------|
\n`);
}, 3000)

// Exports

module.exports = {
    Azkar,
    Colors,
    version,
    EmbedBuilder,
    Database: Data
};
