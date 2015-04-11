$("#btn_get_repos").click(function() {
    $.ajax({
        type: "GET",
        url: "https://api.github.com/users/ebsco/repos",
        dataType: "json",
        success: function(result) {
            for( i in result ) {
                $("#repo_list").append(
                    "<li><a href='" + result[i].html_url + "' target='_blank'>" +
                    result[i].name + "</a></li>"
                );
                console.log("i: " + i);
            }
            console.log(result);
            $("#repo_count").append("Total Repos: " + result.length);
        }
    });
});