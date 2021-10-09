import React, { useState } from "react";

const Login=()=>{
        return (
           <center> 
               <form>
                <h4>Sign In</h4>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <h5 className="forgot-password text-right">
                     <a href="#">Forgot password?</a>
                </h5>
            </form>
            </center>
        );
}

export default Login;
