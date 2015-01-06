#xs-angular-ui-components
A couple cheap and dirty little directives to assist in UI development.

###Table of Contents 
* [Purpose](#purpose)
* [Project Inclusion](#include)
* [Usage](#use)

----

<a name="purpose"></a>
###Puspose
There are two components:

 * `xs.ui.select.placeholder`: Ever wonder why the Select box has no placeholder attribute. This directive gives it one.
 * `xs.ui.date.translate`: translates date format between HTML5 date element and Angular model (i.e., view/model).   

<a name="include"></a>
###Project Inclusion
I am assuming as an angular developer you already know how to download or clone and then reference the script.
After that you can include the module(s) into your project, thusly: 

Inclusion Syntax:
```js

    // include both modules
    angular.module('app', ['xs.ui.components'])
                       
    // include only the Select Placeholder
    angular.module('app', ['xs.ui.select.placeholder'])
                                
    // include only the Date translate module
    angular.module('app', ['xs.ui.date.translate'])    
    
```
----

<a name="use"></a>
###Usage
The select placeholder becomes available as soon as the module is included in your project.
Using the following syntax, "Ranking" will be displayed by default when nothing is selected.

Markup Syntax
```html

    <select class="form-control input-md"
            name="leadRank"
            ng-model="leadList.lead.rank"
            ng-options="r.rank as r.rank for r in leadList.ranks"
            ng-change="leadList.onChange();"
            default-text="Ranking">
    </select>

``` 

The date translate is useful. 
Angular 1.3 takes care of some date issues.
For now, I leave this for those stuck with 1.2 and less.  

Markup Syntax
```html
            
    <input xs-date-translate
           type="date"
           class="form-control"
           id="image-created"
           name="imageCreated"
           ng-model="imageEdit.image.created"
           required>

``` 

