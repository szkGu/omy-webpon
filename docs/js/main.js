
const updateTable = () => {
    const inputs = document.getElementById("goods-input").value.split("\n");
    const counts = inputs.reduce((prev, line) => {
        try {
            let [id, num, name] = line.split("\t");
            id = id.match(/(OMY-.+)\]/)[1].replace(/-/, "_");
            num = parseInt(num.match(/(\d+)個/)[1]);
            if (id in prev) {
                prev[id] += num;
            } else {
                if (name.includes("クッション")) {
                    prev["OMY_SR01"] += num;
                } else if (name.includes("直筆サイン入りアクリルプレート")) {
                    prev["OMY_R01"] += num;
                }
            }
            return prev;
        } catch (e) {
            console.log(e);
            return prev;
        }
    }, {
        OMY_SR01: 0,

        OMY_R01: 0,

        OMY_A01: 0,
        OMY_A02: 0,

        OMY_B01: 0,
        OMY_B02: 0,

        OMY_C01: 0,
        OMY_C02: 0,
        OMY_C03: 0,
        OMY_C04: 0,
        OMY_C05: 0,

        OMY_D01: 0,
        OMY_D02: 0,

        OMY_E01: 0,
        OMY_E02: 0,
        OMY_E03: 0,
        OMY_E04: 0,
        OMY_E05: 0,
        OMY_E06: 0,
        OMY_E07: 0,

        OMY_F01: 0,
        OMY_F02: 0,
        OMY_F03: 0,
        OMY_F04: 0,
        OMY_F05: 0,
        OMY_F06: 0,
        OMY_F07: 0,
        OMY_F08: 0,
        OMY_F09: 0,
        OMY_F10: 0,
    });

    const sum = Object.keys(counts).reduce((prev, key) => {
        document.getElementById(key).textContent = counts[key];
        return prev + counts[key];
    }, 0);
    document.getElementById("OMY_SR").textContent = counts["OMY_SR01"];
    document.getElementById("OMY_R").textContent = counts["OMY_R01"];
    document.getElementById("OMY_A").textContent = counts["OMY_A01"] + counts["OMY_A02"];
    document.getElementById("OMY_B").textContent = counts["OMY_B01"] + counts["OMY_B02"];
    document.getElementById("OMY_C").textContent = counts["OMY_C01"] + counts["OMY_C02"] + counts["OMY_C03"] + counts["OMY_C04"] + counts["OMY_C05"];
    document.getElementById("OMY_D").textContent = counts["OMY_D01"] + counts["OMY_D02"];
    document.getElementById("OMY_E").textContent = counts["OMY_E01"] + counts["OMY_E02"] + counts["OMY_E03"] + counts["OMY_E04"] + counts["OMY_E05"] + counts["OMY_E06"] + counts["OMY_E07"];
    document.getElementById("OMY_F").textContent = counts["OMY_F01"] + counts["OMY_F02"] + counts["OMY_F03"] + counts["OMY_F04"] + counts["OMY_F05"] + counts["OMY_F06"] + counts["OMY_F07"] + counts["OMY_F08"] + counts["OMY_F09"] + counts["OMY_F10"];
    document.getElementById("OMY_SUM").textContent = sum;
    
    console.log(sum);
    console.log(counts);
    updatePng();
};

const updatePng = () => {
    const elem = document.getElementById("table");
    domtoimage.toPng(elem, {
        bgcolor: "#ffffff",
        width: elem.scrollWidth,
        height: elem.scrollHeight
    }).then(dataUrl => {
        document.getElementById("ss").href = dataUrl;
        //const img = new Image();
        //img.src = dataUrl;
        //document.body.appendChild(img);
    });
};

window.onload = () => {
    document.getElementById("goods-input").addEventListener("input", updateTable);
    updatePng();
};