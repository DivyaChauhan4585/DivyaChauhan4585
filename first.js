
//!DOCTYPE html
<html>
<body>

<h2>What Can JavaScript Do?</h2>

<p id="demo">JavaScript can change HTML content.</p>

<button type="button" id="changeTextButton">Click Me!</button>

<script>
// Add an event listener to the button
document.getElementById("changeTextButton").addEventListener("click", function() {
    // Change the content of the paragraph with id "demo"
    document.getElementById("demo").innerHTML = "Hello JavaScript!";
});
</script>

</body>
</html>
