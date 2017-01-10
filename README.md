# mailto-fairy
A small script for dynamically writing out mailto links on any page, (somewhat) safe from email harvesting bots.

## Usage Example (HTML)
````HTML
<span data-mailto-fairy='{"user":"theusername","host":"thehostname","subject":"this is the subject","body":"this is the body"}'></span>
<script type="text/javascript" src="http://io.kepe.org/mailto-fairy.js"></script>
````
The target tag is not required to be a `span` as in the example, but it must contain the `data-mailto-fairy` attribute. Its value must be well-formed JSON, as shown. Notice the double quotes around each variable's key and value (both). This is very important--**they must be double-quoted.**

You may have as many **mailto-fairy** calls as you wish, and each may have different information.

`user` and `host` fields are required; the `subject` and `body` fields, as well as all other supported mailto fields (e.g. `cc`, `bcc`, and so on) are optional.

## mailto-fairy is not ideal.
If **mailto-fairy** were to become popular, it would not take much for email harvesting bots to defeat it. After all, the data is right in the `data-mailto-fairy` attribute. The ideal solution would be to hard-code all the variables into an externally located javascript file, which would then do the replacements without needing to pull any information from the HTML page.
