function submit(){
    const batch = document.querySelectorAll("input[name='batch']")

    console.log(batch);

    

    let selectedBatchTimimg = [];

    document
    .querySelectorAll("input[name='Batch']:Checked")
    .forEach((element) => {
        selectedBatchTiming.push(element.value);
    });

    const selectedBtch = document.quesrySelector(
        "input[name='timimg']:checked"
    ).value

    console.log(selectedBatch);
}

function clearForm(){
    window.location.reload();
}