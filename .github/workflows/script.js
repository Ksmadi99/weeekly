function showVoting() {
    document.getElementById('votingSection').style.display = 'block';
}

function submitVote() {
    const selectedOption = document.getElementById('voteOption').value;
    alert('You voted for: ' + selectedOption);
    // Here you would typically send this data to a server if you had one
}
