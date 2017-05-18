// @codekit-prepend "jquery.js";
// @codekit-prepend "semantic.js";
// @codekit-prepend "airtable.js";

//Configure & Handshake
var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyNyK2dVB4Da7Dzo'
});
var base = Airtable.base('appYjgGyxE7AXQYex');

//check check
console.log(base);

// Get records
base('YaHURR').select({
    view: 'Grid view'
}).firstPage(function(err, records) {
    if (err) { console.error(err); return; }
    records.forEach(function(record) {
        
//        console.log('Retrieved', record.get('Name'));
        var students = `<h1>${record.get('Name')}</h1>`
        
        // Display
        $('#students').html(students);
        
    });
});

var students = `          
    <section class="ui card">
          <div class="image">
              <img src="https://placehold.it/400x300" alt="">
          </div>

          <div class="content">
              <h3>First Last</h3>
              <p class="description">
                  <a href="">GitHub</a> and <a href="">Email</a>
              </p>
          </div>
      </section>
`;