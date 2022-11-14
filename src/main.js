$(function () {
    const url = 'https://docs.google.com/spreadsheets/d/1FT-q_k6Ah0QG2BpNm14BJxLhLt5QWuf9CcGvSAAJvro/edit?usp=sharing';

    $.getJSON(url, data => {
        console.log(data.feed.entry);

        data.feed.entry.forEach(item => {
            const post = {
                name: item['gsx$name']['$t'],
                id: item['gsx$id']['$t'],
                short_description: item['gsx$short_description']['$t'],
                description: item['gsx$description']['$t'],
            };

            $('#custom-list').append(`
        <li>
          <h2>${post.name}</h2>
          <p>${post.id}</p>
        </li>
    `);
        });
    });
});