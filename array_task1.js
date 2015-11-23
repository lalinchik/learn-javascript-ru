/**
 * Created by Alina on 23.11.2015.
 */
"use strict";
 var styles = ["Джаз", "Блюз"];
 styles.push("Рок-н-Ролл");
 styles[styles.length - 2] = "Классика";
 //alert(styles.shift());
 styles.unshift("Рэп", "Регги");

 var rand = Math.floor(Math.random() * styles.length);
 alert(styles[rand]);
