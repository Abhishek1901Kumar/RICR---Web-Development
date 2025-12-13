function submit() {
  const nm = document.getElementById("fullname").value.trim();
  const em = document.getElementById("fullname").value.trim();
  const ph = document.getElementById("fullname").value.trim();
  const db = document.getElementById("fullname").value.trim();

  //validation
  //if (data is invalid)
  // alert()

  if (/^[A-Za-z ]+$/.test(nm)) {
    alert("Wrong Name");
    return;
  }

  if (!/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(em)) {
    alert("Wrong Email");
    return;
  }
  if (!/^[6-9]\d{9}$/.test(ph)) {
    alert("Wrong Phone");
    return;
  }
  const currentyear = new Date().getFullYear;

  const data = {
    fullName: nm,
    Email: em,
    Phone: ph,
    DOB: db,
  };

  console.log(data);
}
