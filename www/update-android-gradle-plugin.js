const fs = require('fs');

module.exports = function () {
    fixDuplicateVariables();
};

/**
 * https://github.com/CleverTap/clevertap-cordova/issues/58#issuecomment-631262884
 */
function fixDuplicateVariables() {
    let s = fs.readFileSync("platforms/android/app/src/main/res/values/strings.xml").toString();

    s = s.replace(new RegExp('<string name="google_app_id">([^\@<]+?)<\/string>', "i"), '');
    s = s.replace(new RegExp('<string name="google_api_key">([^\@<]+?)<\/string>', "i"), '');
    s = s.replace(new RegExp('(\r\n|\n|\r)[ \t]*(\r\n|\n|\r)', "gm"), '$1');

    fs.writeFileSync("platforms/android/app/src/main/res/values/strings.xml", s);
}
