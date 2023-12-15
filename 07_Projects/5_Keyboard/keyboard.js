const insert = document.getElementById('insert')

let flag = true; // for first key press


    window.addEventListener('keydown',(e) => {

        if (flag) {
            insert.innerHTML = `
            <div class="color">
            <table style="width:100%">
            <tr>
            <th>Key</th>
            <th>KeyCode</th>
            <th>Code</th>
            </tr>
            <tr>
            <td>${e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
            </tr>
            </table>
            
            </div>
            `
            flag=false;
        } else {
            insert.innerHTML += `
            <div class="color">
            <table style = "width:100%">
            <tr>
            <td>${e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
            </tr>
            </table>
            
            </div>
            `
        }
    }
    )
