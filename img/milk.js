
        let userslist = JSON.parse(localStorage.getItem("userslist")) || []
        let aname = document.getElementById("admin")
        userslist.forEach((ele) => {
            aname.innerHTML += ` ${ele.name}`
        })

        let logoutBtn = document.getElementById("logoutBtn");

        logoutBtn.addEventListener("click", () => {

            Swal.fire({
                title: "Are you sure?",
                text: "You want to logout?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, Logout"
            }).then((result) => {

                if (result.isConfirmed) {

                    // remove login data if needed
                    localStorage.removeItem("userslist");

                    Swal.fire({
                        title: "Logged Out!",
                        icon: "success",
                        timer: 1500,
                        showConfirmButton: false
                    });

                    setTimeout(() => {
                        window.location.href = "index.html";
                    }, 1500);
                }
            });
        });