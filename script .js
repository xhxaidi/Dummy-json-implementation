const id = document.querySelector(".id");
const fN = document.querySelector(".fN");
const lN = document.querySelector(".lN");
const age = document.querySelector(".age");
const URL = "https://dummyjson.com/users";
const kmore = document.querySelector(".kmore");
const del = document.querySelector(".delete");
const update = document.querySelector(".update");
const tbbdy = document.querySelector("tbody");
const editsection = document.querySelector(".editsection");
const eboxin = document.querySelector(".eboxin");
const eid = document.querySelector(".eid");
const efname = document.querySelector(".efname");
const elname = document.querySelector(".elname");
const eage = document.querySelector(".eage");
const ehname = document.querySelector(".ehname");
const saveBtn = document.querySelector(".ebtn");

async function getUsers() {
  console.log("getting data ......");
  const res = await fetch(URL);
  console.log();
  const data = await res.json();
  console.log(data);

  if (data.users && data.users.length > 0) {
    data.users.forEach((user) => {
      const tr = document.createElement("tr");
      // create the id element
      const idData = document.createElement("td");
      idData.classList.add("id");
      idData.innerHTML = user.id;

      // create the first name element
      const fNdata = document.createElement("td");
      fNdata.classList.add("fN");
      fNdata.innerHTML = user.firstName;

      // create the last name element
      const lNdata = document.createElement("td");
      lNdata.classList.add("lN");
      lNdata.innerHTML = user.lastName;

      // create the age element
      const agedata = document.createElement("td");
      agedata.classList.add("age");
      agedata.innerHTML = user.age;

      // create the kmore element
      const kmoreData = document.createElement("td");
      kmoreData.classList.add("kmore"); // Adds the class "kmore"
      kmoreData.innerHTML = "Know more"; // Sets the inner content
      kmoreData.setAttribute("data-user-id", user.id); // Sets a custom attribute with user ID

      kmoreData.addEventListener("click", (e) => {
        window.location.href = `infopage.html?userId=${user.id}`;
      });
      // create the delete element
      const delData = document.createElement("td");
      delData.classList.add("delete");
      delData.setAttribute = ("data-user-id", user.id);

      // delete icon
      const delbtn = document.createElement("i");
      delbtn.classList.add("fa-solid", "fa-trash");
      delbtn.setAttribute("data-user-id", user.id);
      delData.append(delbtn);

      //working on delete section
      delData.addEventListener("click", (e) => {
        const userId = e.target.getAttribute("data-user-id");
        console.log("deleting data");
        deleteUser(userId);
      });
      // create the update element
      const updateData = document.createElement("td");
      updateData.classList.add("update");
      updateData.setAttribute = ("class", "update");
      updateData.setAttribute = ("data-user-id", user.id);
      // update icon
      const upDateBtn = document.createElement("i");
      upDateBtn.classList.add("fa-regular", "fa-pen-to-square");
      upDateBtn.setAttribute("data-user-id", user.id);
      updateData.append(upDateBtn);
      // working on update section
      upDateBtn.addEventListener("click", (e) => {
        console.log("Updating data");
        editsection.style.display = "flex";
        ehname.innerText = user.firstName;
        eid.value = user.id;
        efname.value = user.firstName;
        elname.value = user.lastName;
        eage.value = user.age;
        saveBtn.addEventListener("click", (e) => {
          const filledData = {
            id: eid.value,
            firstName: efname.value,
            lastName: elname.value,
            age: eage.value,
          };
          idData.innerHTML = eid.value;
          fNdata.innerHTML = efname.value;
          lNdata.innerHTML = elname.value;
          agedata.innerHTML = eage.value;
          user.firstName = editsection.style.display = "none";

          update(user.id, filledData);
        });
      });

      tbbdy.append(tr);
      tr.append(
        idData,
        fNdata,
        lNdata,
        agedata,
        kmoreData,
        delData,
        updateData
      );
      //   tr.innerHTML = `

      //     <td class="id">${user.id}</td>
      //     <td class="fN">${user.firstName}</td>
      //     <td class="lN">${user.lastName}</td>
      //     <td class="age">${user.age}</td>
      //     <td class="kmore" data-user-id="${user.id}">Know more</td>
      //     <td class="delete" data-user-id="${user.id}" > <i class="fa-solid fa-trash" data-user-id="${user.id}"></i></td>
      //     <td class="update" data-user-id="${user.id}"> <i class="fa-regular fa-pen-to-square "data-user-id="${user.id}"></i></i></td>
      //   `;
    });
  }
}

// kmore.addEventListener("click", (e) => {
//   if (e.target.classList.contains("kmore")) {
//     const userId = e.target.getAttribute("data-user-id");
//     window.location.href = `infopage.html?userId=${user.id}`;
//   }
// });
getUsers();
// kmore.document.addEventListener("click", (e) => {
//   window.location.href = `unfopage.html?userId=${userId}`;
// });

/************************* To add a new member **********************/

document.querySelector("body").addEventListener("click", (e) => {
  if (e.target.classList.contains("addusr")) {
    window.location.href = `addmember.html`;
  }
});

/************************* To delete the user details **********************/

async function deleteUser(userId) {
  const res = await fetch(`https://dummyjson.com/users/${userId}`, {
    method: "DELETE",
  });
  const data = await res.json();

  if (res.ok) {
    console.log("User deleted successfully:", data);
    alert("User deleted successfully!");

    // Remove the user's row from the table
    document.querySelector(`[data-user-id='${userId}']`).closest("tr").remove();
  }
  console.log(data);
}
/************************** To update the user details **********************/
async function updateUser(userId, updatedData) {
  console.log(userId);
  console.log(updatedData);
  const res = await fetch(`https://dummyjson.com/users/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  });
  console.log(res);
  const data = await res.json();

  console.log("Updated Data:", data);

  alert("User updated successfully!");

  console.log(updatedData);
}
// document.querySelector("tbody").addEventListener("click", (e) => {
//   if (
//     e.target.classList.contains("fa-solid") ||
//     e.target.classList.contains("delete")
//   ) {
//     const userId = e.target.getAttribute("data-user-id");
//     console.log("deleting data");
//     deleteUser(userId);
//   }
// });

//////////////////////////////////////////GPT////////////////////////////////////////////////
// // Event delegation for dynamically added update buttons
// document.querySelector("tbody").addEventListener("click", (e) => {
//   const updateBtn = e.target.closest(".update"); // Find the closest .update element
//   const eid = document.querySelector(".eid");
//   const efname = document.querySelector(".efname");
//   const elname = document.querySelector(".elname");
//   const eage = document.querySelector(".eage");
//   if (updateBtn) {
//     const userId = updateBtn.getAttribute("data-user-id");
//     console.log("Updating user with ID:", userId);
//     // Toggle the visibility of the edit section
//     editsection.style.display = `   <td class="id">${user.id}</td>
//         <td class="fN">${user.firstName}</td>
//         <td class="lN">${user.lastName}</td>
//         <td class="age">${user.age}</td>
//         <td class="kmore" data-user-id="${user.id}">Know more</td>
//         <td class="delete" data-user-id="${user.id}" > <i class="fa-solid fa-trash" data-user-id="${user.id}"></i></td>
//         <td class="update" data-user-id="${user.id}"> <i class="fa-regular fa-pen-to-square "data-user-id="${user.id}"></i></i></td> `;
//     editsection.style.display === "none" ? "flex" : "none";

//     fetch(`https://dummyjson.com/users/${userId}`)
//       .then((res) => res.json())
//       .then((user) => {
//         eid.innerHTML = user.id;
//         efname.value = user.firstName;
//         elname.value = user.lastName;
//         eage.value = user.age;

//         saveBtn.setAttribute("data-user-id", user.id);
//       })
//       .catch((error) => {
//         console.error("Error fetching user data:", error);
//       });
//   }
// });

// /// BUG HERE IS WHEN WE CLICK ON THE BUTTON TWICE THEN IT SHOWS THE SCREEN

// //////////////////////////////////////////GPT////////////////////////////////////////////////

//
const x = document.querySelector(".X");
x.addEventListener("click", (e) => {
  editsection.style.display = "none";
});
