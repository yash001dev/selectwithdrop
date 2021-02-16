import logo from './logo.svg';
import './App.css';
import { useDropzone } from 'react-dropzone';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCategories } from './redux/user/user.selector';
import { setCurrentPic } from './redux/user/user.actions';

const animatedComponents = makeAnimated();
function App({collections,setCurrentPic}) {

  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps,
  } = useDropzone({
    accept: 'image/jpeg, image/png',
    maxFiles: 1
  });

  const data = [{ value: 'Javascript', label: 'Javascript' }, { value: 'Java', label: 'Java' }, { value: 'Python', label: 'JPython' }, { value: 'C and C++', label: 'C and C++' }];

  const acceptedFilesItems = acceptedFiles.map(file => {
    setCurrentPic(file.path,file.size)
    return(
    <li key={file.path}>
      
      {file.path}-{file.size} bytes
    </li>
  )});

  const fileRejectionItems = fileRejections.map(({ file, errors }) => {
    return (
      <li key={file.path}>
        {file.path}-{file.size} bytes
        <ul>
          {errors.map(e => <li key={e.code}>{e.message}</li>)}
        </ul>
      </li>
    )
  });


  return (
    <section className="container">
      {console.log(collections)}
      <center>
        <h1>Enter Your Profile Information</h1>
      </center>
      <Select
        closeMenuOnSelect={false}
        label="Select Your Preferred Language"
        components={animatedComponents}
        isMulti
        options={collections}
      />

      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop File here,or click to select file</p>
        <em>(Only *.jpeg and *.png images will be accepted)</em>
      </div>
      <aside>
        <h4>Selected Files</h4>
        <ul>{acceptedFilesItems}</ul>
        {console.log(fileRejectionItems)}

        {/* {fileRejectionItems?<div><h4>Rejected Files</h4><ul>{fileRejectionItems}</ul></div>:null} */}
      </aside>
    </section>
  );
}

const mapStateToProps=createStructuredSelector({
  collections:selectCategories,
});

const mapDispatchToProps=dispatch=>({
  setCurrentPic:(filePath,fileSize)=>dispatch(setCurrentPic({filePath,fileSize}))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
