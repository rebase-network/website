import React from "react";

const CreateGeekDaily = ()=>{
  return(
    <>
    <form>
      <div className="card shadow-sm">

        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <div className="input-group">
                <span className="input-group-text">极客日报 #</span>
                <input type="number" name="" required className="form-control form-control-lg" />
              </div>
            </div>

            <div className="col-md-6">
              <div className="input-group">
                <select class="form-select form-select-lg">
                  <option selected="">选择作者</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="card-body">
          <h5 className="text-darkblue">日报 1</h5>

          <div className="row">
            <div className="col-md-4 mb-2">
              <input type="text" name="" required placeholder="作者"  className="form-control form-control-lg" />
            </div>
            <div className="col-md-4 mb-2">
              <input type="text" name="" required placeholder="标题" className="form-control form-control-lg" />
            </div>
            <div className="col-md-4 mb-2">
              <input type="text" name="" required placeholder="链接" className="form-control form-control-lg" />
            </div>

            <div className="col-md-12 mb-2">
              <label className="form-label">介绍</label>
              <textarea rows="3" className="form-control"></textarea>
            </div>
          </div>
        </div>

        <div className="card-body">
          <h5 className="text-darkblue">日报 2</h5>

          <div className="row">
            <div className="col-md-4 mb-2">
              <input type="text" name="" required placeholder="作者"  className="form-control form-control-lg" />
            </div>
            <div className="col-md-4 mb-2">
                <input type="text" name="" required placeholder="标题" className="form-control form-control-lg" />
            </div>
            <div className="col-md-4 mb-2">
              <input type="text" name="" required placeholder="链接" className="form-control form-control-lg" />
            </div>

            <div className="col-md-12 mb-2">
              <label className="form-label">介绍</label>
              <textarea rows="3" className="form-control"></textarea>
            </div>
          </div>
        </div>

        <div className="card-body">
          <h5 className="text-darkblue">日报 3</h5>

          <div className="row">
            <div className="col-md-4 mb-2">
              <input type="text" name="" placeholder="作者"  className="form-control form-control-lg" />
            </div>
            <div className="col-md-4 mb-2">
                <input type="text" name="" placeholder="标题" className="form-control form-control-lg" />
            </div>
            <div className="col-md-4 mb-2">
              <input type="text" name="" placeholder="链接" className="form-control form-control-lg" />
            </div>

            <div className="col-md-12 mb-2">
              <label className="form-label">介绍</label>
              <textarea rows="3" className="form-control"></textarea>
            </div>
            <div className="col-12 mt-1">
              <input type="submit" className="btn btn-success" value="发布" />
            </div>
          </div>
        </div>
      </div>
    </form>
    </>
  )
}

export default CreateGeekDaily
