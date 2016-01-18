# angular2-webpack-uglify

Repo to reproduce issues when uglifying angular2 with mangle: true

To reproduce:

 * webpack -p (produces a mangled bundle.js) -> error occurs
 * webpack (produces the not-minified version) -> error does not occur

Alternatively mangle can be set to false in the webpack.config.js with the same results.

```
EXCEPTION: No value accessor for '' in [data.search in e@0:19]
EXCEPTION: No value accessor for '' in [data.search in e@0:19]
ORIGINAL EXCEPTION: No value accessor for ''
ORIGINAL STACKTRACE:
Error: No value accessor for ''
    at new t (http://127.0.0.1:56187/bundle.js:1:12197)
    at s (http://127.0.0.1:56187/bundle.js:1:26713)
    at Object.i [as setUpControl] (http://127.0.0.1:56187/bundle.js:1:25991)
    at t.ngOnChanges (http://127.0.0.1:56187/bundle.js:5:29716)
    at e.ChangeDetector_e_0.detectChangesInRecordsInternal (viewFactory_e:53:59)
    at e.detectChangesInRecords (http://127.0.0.1:56187/bundle.js:7:10658)
    at e.runDetectChanges (http://127.0.0.1:56187/bundle.js:7:10219)
    at e._detectChangesInViewChildren (http://127.0.0.1:56187/bundle.js:7:12475)
    at e.runDetectChanges (http://127.0.0.1:56187/bundle.js:7:10329)
    at e.detectChanges (http://127.0.0.1:56187/bundle.js:7:9902)
ERROR CONTEXT:
e
Live reload enabled.
```
