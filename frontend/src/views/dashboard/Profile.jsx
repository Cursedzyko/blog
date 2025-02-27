import React from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";

function Profile() {
    return (
        <>
            <Header />
            <section className="py-4 bg-gray-900 text-white min-h-screen">
                <div className="container mx-auto px-4">
                    <div className="bg-gray-800 rounded-lg shadow-lg p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h5 className="text-xl font-semibold">Profile Details</h5>
                            <p className="text-sm text-gray-400">You have full control to manage your own account settings.</p>
                        </div>
                        <form className="space-y-4">
                            <div className="flex items-center gap-4 mb-6">
                                <img
                                    src="https://eduport.webestica.com/assets/images/avatar/09.jpg"
                                    className="avatar-xl rounded-full object-cover w-32 h-32"
                                    alt="avatar"
                                />
                                <div>
                                    <h4 className="mb-2 text-lg font-semibold">Your avatar</h4>
                                    <p className="text-sm text-gray-400">PNG or JPG no bigger than 800px wide and tall.</p>
                                    <input
                                        type="file"
                                        className="form-control mt-3 bg-gray-700 border border-gray-600 text-white rounded p-2"
                                    />
                                </div>
                            </div>
                            <hr className="my-5 border-gray-600" />
                            <div>
                                <h4 className="text-lg font-semibold">
                                    <i className="fas fa-user-gear mr-2"></i>Personal Details
                                </h4>
                                <p className="mb-4 mt-2 text-sm text-gray-400">Edit your personal information and address.</p>
                                <div className="space-y-4">
                                    <div className="flex flex-col">
                                        <label htmlFor="fname" className="text-sm text-gray-300">Full Name</label>
                                        <input
                                            type="text"
                                            id="fname"
                                            className="form-control bg-gray-700 text-white border border-gray-600 p-3 rounded"
                                            placeholder="What's your full name?"
                                            required
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <label htmlFor="bio" className="text-sm text-gray-300">Bio</label>
                                        <input
                                            type="text"
                                            id="bio"
                                            className="form-control bg-gray-700 text-white border border-gray-600 p-3 rounded"
                                            placeholder="Write a catchy bio!"
                                            required
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <label htmlFor="about" className="text-sm text-gray-300">About Me</label>
                                        <textarea
                                            id="about"
                                            placeholder="Tell us about yourself..."
                                            className="form-control bg-gray-700 text-white border border-gray-600 p-3 rounded"
                                            rows="4"
                                        ></textarea>
                                    </div>

                                    <div className="flex flex-col">
                                        <label htmlFor="country" className="text-sm text-gray-300">Country</label>
                                        <input
                                            type="text"
                                            id="country"
                                            className="form-control bg-gray-700 text-white border border-gray-600 p-3 rounded"
                                            placeholder="What country are you from?"
                                            required
                                        />
                                    </div>

                                    <div className="flex justify-end mt-6">
                                        <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded flex items-center">
                                            Update Profile <i className="fas fa-check-circle ml-2"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Profile;
