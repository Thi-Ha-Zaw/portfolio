const Contact = () => {
    return (
        <section className=" w-full min-h-screen h-screen sticky top-0 bg-gray-900 flex justify-end">
            <div className="lg:w-1/2 w-full ">
                <div className=" px-5 py-20 sm:px-20 ">
                    <div id="contact" className=" font-roboto_condensed">
                        <h2 className="text-3xl font-bold mb-4 text-gray-50">
                            Contact Me
                        </h2>
                        <p className="mb-6 text-gray-400">
                            If you have any questions or would like to get in
                            touch, please fill out the form below.
                        </p>
                        <div className="space-y-4">
                            <div className="form-group">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-400 mb-2"
                                >
                                    Name:
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="block w-full p-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="form-group">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-400 mb-2"
                                >
                                    Email:
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="block w-full p-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="form-group">
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-400 mb-2"
                                >
                                    Message:
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    className="block w-full p-2 border border-gray-300 rounded-md h-32"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className=" bg-transparent active:scale-75 duration-200 shadow-sm shadow-gray-50 text-white py-2 px-4 rounded-md"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
