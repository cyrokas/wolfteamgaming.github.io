$(function () {
    const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTyfmE_hkpdGpBgotVyAH3kKrFEh6zYPiC6hm70UwQWomNd_gM9kddg2rAggLV6mYlndvamTLH_N2AX/pubhtml?gid=0&single=true';

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
