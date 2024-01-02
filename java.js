const nama = document.querySelector('input[name=nama]')
const npm = document.querySelector('input[name=no]')
const nilai = document.querySelector('input[name=nilai]')

const submit = document.querySelector('button')


submit.addEventListener('click', function(){
    
    if(nilai.value >= 80 ){
        document.write("nama : "+ nama.value + "<br>")
        document.write("npm : "+ npm.value + "<br>")
        document.write("nilai : "+ nilai.value + "<br>")
        document.write("keterangan : "+"A<br>")
        document.write("status : "+"lulus")

    } else if(nilai.value >= 70){
        document.write("nama : "+ nama.value + "<br>")
        document.write("npm : "+ npm.value + "<br>")
        document.write("nilai : "+ nilai.value + "<br>")
        document.write("keterangan : "+"B<br>")
        document.write("status : "+"lulus")
    }else if(nilai.value >= 60){
        document.write("nama : "+ nama.value + "<br>")
        document.write("npm : "+ npm.value + "<br>")
        document.write("nilai : "+ nilai.value + "<br>")
        document.write("keterangan : "+"C<br>")
        document.write("status : "+"lulus") 
    }else if(nilai.value >= 50){
        document.write("nama : "+ nama.value + "<br>")
        document.write("npm : "+ npm.value + "<br>")
        document.write("nilai : "+ nilai.value + "<br>")
        document.write("keterangan : "+"D<br>")
        document.write("status : "+"tidak lulus")
    } else{
        document.write("nama : "+ nama.value + "<br>")
        document.write("npm : "+ npm.value + "<br>")
        document.write("nilai : "+ nilai.value + "<br>")
        document.write("keterangan : "+"E<br>")
        document.write("status : "+"tidak lulus")

    }
})


