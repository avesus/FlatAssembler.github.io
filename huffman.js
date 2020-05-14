var letters,maxX,maxY,minX,maximumDepth,inputString;
function onButtonClick() {
    inputString=document.getElementById("input").value;
    if (inputString.length<2) {
        alert("Strings of length less than two can't be Huffman encoded.");
        return;
    }
    console.log("Making a Huffman tree for the string \""+inputString+"\".");
    letters=new Object();
    for (let i=0; i<inputString.length; i++) {
        if (letters[inputString[i]]==undefined) {
            letters[inputString[i]]=new Object();
            letters[inputString[i]].frequency=0;
            letters[inputString[i]].hasBeenUsed=false;
            letters[inputString[i]].childrenNodes=[];
        }
        letters[inputString[i]].frequency++;
    }
    var entropy=0,numberOfDistinctLetters=0;
    for (let i in letters) {
        letters[i].probability=letters[i].frequency/inputString.length;
        entropy-=letters[i].probability*Math.log2(letters[i].probability);
        numberOfDistinctLetters++;
    }
    var bitsInEqualCode=Math.ceil(Math.log2(numberOfDistinctLetters));
    var howManyUnused=numberOfDistinctLetters;
    var rootNode;
    do {
        let minimum1,minimum2;
        for (let i in letters)
            if (letters[i].hasBeenUsed==false && (minimum1==undefined || letters[i].frequency<letters[minimum1].frequency))
                minimum1=i;
        for (let i in letters)
            if (letters[i].hasBeenUsed==false && i!=minimum1 && (minimum2==undefined || letters[i].frequency<letters[minimum2].frequency))
                minimum2=i;
        console.log("Connecting \'"+minimum1+"\' and \'"+minimum2+"\' into a single node.");
        letters[minimum1].hasBeenUsed=true;
        letters[minimum2].hasBeenUsed=true;
        letters[minimum1+minimum2]=new Object();
        letters[minimum1+minimum2].childrenNodes=[minimum1, minimum2];
        letters[minimum1+minimum2].frequency=letters[minimum1].frequency+letters[minimum2].frequency;
        if (letters[minimum1+minimum2].frequency==inputString.length)
            rootNode=minimum1+minimum2;
        letters[minimum1+minimum2].hasBeenUsed=false;
        howManyUnused=0;
        for (let i in letters)
            if (letters[i].hasBeenUsed==false)
                howManyUnused++;
    }
    while (howManyUnused>1);
    stackWithNodes=[rootNode];
    stackWithCodes=[""];
    stackWithDepths=[0];
    var averageSymbolLength=0;
    maximumDepth=0;
    while (stackWithNodes.length>0) {
        let currentNode=stackWithNodes.pop();
        let currentCode=stackWithCodes.pop();
        let currentDepth=stackWithDepths.pop();
        maximumDepth=Math.max(maximumDepth,currentDepth);
        letters[currentNode].code=currentCode;
        if (letters[currentNode].childrenNodes.length==0) {
            averageSymbolLength+=letters[currentNode].probability*currentCode.length;
            continue;
        }
        stackWithNodes.push(letters[currentNode].childrenNodes[0]);
        stackWithNodes.push(letters[currentNode].childrenNodes[1]);
        stackWithCodes.push(currentCode+"0");
        stackWithCodes.push(currentCode+"1");
        stackWithDepths.push(currentDepth+1);
        stackWithDepths.push(currentDepth+1);
    }
    console.log("The Huffman tree is constructed:");
    console.log("node\tfreq\tcode\tleft\tright")
    for (let i in letters)
        console.log("'"+i+"'\t"+letters[i].frequency+"/"+inputString.length+"\t"+
                    letters[i].code+"\t"+((letters[i].childrenNodes[0])?("'"+letters[i].childrenNodes[0]+"'"):"null")+
                    "\t"+(letters[i].childrenNodes[1]?("'"+letters[i].childrenNodes[1]+"'"):"null"));
    console.log("The Huffman encoding is:");
    output="";
    for (let i=0; i<inputString.length; i++)
        output+=letters[inputString[i]].code;
    console.log(output);
    console.log("The average length of a symbol in Huffman code is: "+averageSymbolLength+" bits.");
    console.log("The average length of a symbol in the equal-length code is: "+bitsInEqualCode+" bits.");
    console.log("The entropy of the input string is: "+entropy+" bits.");
    console.log("The efficiency of the Huffman code is: "+(entropy/averageSymbolLength));
    console.log("The efficiency of the equal-length code is: "+(entropy/bitsInEqualCode));
    document.getElementById("output").innerText=output;
    var tree=document.getElementById("tree");
    var svgNS=tree.namespaceURI;
    while (document.getElementById("tree").childNodes.length) //Clear the diagram ("innerHTML" won't work because... SVG).
        document.getElementById("tree").removeChild(document.getElementById("tree").firstChild);
    maxX=maxY=minX=0;
    draw(rootNode,0,0,30*Math.pow(2,maximumDepth),0);
    for (var i = 0; i < document.getElementById("tree").childNodes.length; i++) //In case a node falls left of the diagram, move all nodes rightwards.
    {
        if (document.getElementById("tree").childNodes[i].getAttribute("x"))
            document.getElementById("tree").childNodes[i].setAttribute("x", document.getElementById("tree").childNodes[i].getAttribute("x") * 1 - minX);
        if (document.getElementById("tree").childNodes[i].getAttribute("x1"))
            document.getElementById("tree").childNodes[i].setAttribute("x1", document.getElementById("tree").childNodes[i].getAttribute("x1") * 1 - minX);
        if (document.getElementById("tree").childNodes[i].getAttribute("x2"))
            document.getElementById("tree").childNodes[i].setAttribute("x2", document.getElementById("tree").childNodes[i].getAttribute("x2") * 1 - minX);
    }
    document.getElementById("tree").style.height = maxY + 100 + "px";
}
function draw(object, x, y, space, id)
{
    if (x > maxX)
        maxX = x;
    if (x < minX)
        minX = x;
    if (y > maxY)
        maxY = y;
    var svgNS = document.getElementById("tree").namespaceURI;
    var rectangle = document.createElementNS(svgNS, "rect");
    rectangle.setAttribute("x", x);
    rectangle.setAttribute("y", y);
    rectangle.setAttribute("width", 50);
    rectangle.setAttribute("height", 50);
    rectangle.setAttribute("id", "node" + id);
    rectangle.setAttribute("fill","#EEEEEE");
    document.getElementById("tree").appendChild(rectangle);
    var text = document.createElementNS(svgNS, "text");
    text.innerHTML=letters[object].frequency+"/"+inputString.length;
    text.setAttribute("x", x+5);
    text.setAttribute("y", y + 20);
    text.style.fill = "black";
    text.setAttribute("font-family", "monospace");
    text.setAttribute("font-size", 14);
    document.getElementById("tree").appendChild(text); 
    if (object.length==1) {
        let character = document.createElementNS(svgNS, "text");
        character.innerHTML=object;
        character.setAttribute("x", x+20);
        character.setAttribute("y", y + 40);
        character.style.fill = "black";
        character.setAttribute("font-family", "monospace");
        character.setAttribute("font-size", 14);
        document.getElementById("tree").appendChild(character);
    }
    for (let i = 0; i < letters[object].childrenNodes.length; i++) {
        draw(letters[object].childrenNodes[i], x + (i - 0.5) * space, y + 100, space / 2, id + 1);
        let line = document.createElementNS(svgNS, "line");
        line.setAttribute("x1", x + 25);
        line.setAttribute("y1", y + 50);
        line.setAttribute("x2", x + (i - 0.5) * space + 25);
        line.setAttribute("y2", y + 100);
        line.setAttribute("stroke-width", 2);
        line.setAttribute("stroke", "black");
        document.getElementById("tree").appendChild(line);
        let bit = document.createElementNS(svgNS,"text");
        bit.innerHTML = i;
        bit.setAttribute("x", x + (i - 0.5) * space + 25);
        bit.setAttribute("y", y + 80);
        bit.style.fill = "black";
        bit.setAttribute("font-family", "monospace");
        bit.setAttribute("font-size", 14);
        document.getElementById("tree").appendChild(bit);
    }
}
