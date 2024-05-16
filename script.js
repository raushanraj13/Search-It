// This code is for google search engine

function search() {
    var query = document.getElementById("searchInput").value;
    var apiKey = "AIzaSyCEM4C3XmjemUutBoRjOv0ULBVBqmJVyp4";
    var cx = "f233700d1ab9b4237";
    var url = `https://www.googleapis.com/customsearch/v1?q=${query}&key=${apiKey}&cx=${cx}`;

    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        if (data.items) {
            displayResults(data.items);
        } else {
            console.error("No items found in response:", data);
        }
    })
    .catch(error => console.error("Error fetching data:", error));
}

// This code ends here

// Function to display result for google

function displayResults(results) {
    var resultsContainer = document.getElementById("result-output-google");
    resultsContainer.innerHTML = "";

    results.forEach(result => {
        var link = document.createElement("a");
        link.href = result.link;
        link.textContent = result.title;
        link.target = "_blank";

        var snippet = document.createElement("p");
        snippet.textContent = result.snippet;

        var resultDiv = document.createElement("div");
        resultDiv.appendChild(link);
        resultDiv.appendChild(snippet);

        resultsContainer.appendChild(resultDiv);
    });
}

// This code ends here

// Function to display result for bing


