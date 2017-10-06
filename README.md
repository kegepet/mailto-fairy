# mailto-fairy
A small script for dynamically writing out mailto links on any page, (somewhat) safe from email harvesting bots.

## How It Works
All elements on the page with a `data-mailto-fairy` attribute will be replaced with a newly created anchor element. All attributes of the original source element apart from `data-mailto-fairy`, as well as any custom ones, will be preserved in the newly created anchor. All children of the source element will also be preserved. If there are no children, the email address will be written out, but without prefilled fields, e.g. `user@example.com`.

You may have as many calls to **mailto-fairy** on the page as you wish, and each may have different information.

## Usage Example (HTML)
````HTML
<span data-mailto-fairy='{"user":"theusername","host":"thehostname","subject":"this is the subject","body":"this is the body"}'></span>
<script src="/path/to/mailto-fairy.js"></script>
````
The source element is not required to be a `span` as in the example, but it must contain the `data-mailto-fairy` attribute. Its value must be well-formed JSON, as shown. Notice the double quotes around each variable's key and value (both). This is very important--**they must be double-quoted.** Any double quotes within the value of any variable must be escaped, e.g. `"body":"The dev said, \"All double quotes must be escaped.\""`.

`user` and `host` fields are required; the `subject` and `body` fields, as well as all other supported mailto fields (`cc`, `bcc`, and so on), are optional.

## mailto-fairy Is Not Ideal
If **mailto-fairy** were to become widely used, it would not take much for email harvesting bots to defeat it. After all, the data is right in the `data-mailto-fairy` attribute. The ideal solution would be to hard-code all the variables into an externally located javascript file, which would then do the replacements without needing to pull any information from the HTML.
