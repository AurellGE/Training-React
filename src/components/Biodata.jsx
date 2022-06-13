const Biodata = () => {
  return (
    <div>
      <h3 className="biodata__title">Biodata</h3>
      <div className="biodata">
        <div>
          <h5 className="biodata__project">Name</h5>
          <p>Aurellia Gita Elysia</p>

          <h5 className="biodata__project">Date of Birth</h5>
          <p>December 24, 2002</p>
        </div>
        <div>
          <h5 className="biodata__project">Hobbies</h5>
          <ul>
            <li>Reading historical fiction novels</li>
            <li>Drawing digital art</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Biodata;
