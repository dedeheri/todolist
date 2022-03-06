// redux
import { useDispatch, useSelector } from "react-redux";
import { MODAL_DELETE_OFF } from "../redux/action-type";

// icons
import { BsInfoCircle } from "react-icons/bs";
import { useEffect } from "react";
import { deleteTask } from "../redux/action/task";

export default function ModalDelete() {
  const dispatch = useDispatch();
  const {
    modal: { modalDelete, idTask, title },
  } = useSelector((state) => state.style);

  function closeModal() {
    dispatch({ type: MODAL_DELETE_OFF, modal: false });
  }

  function handleDelete(id) {
    if (idTask.length > 0) {
      dispatch(deleteTask(id));
    }
  }

  return (
    <>
      <div
        className={`z-50 fixed inset-0 flex justify-center duration-500 ${
          modalDelete ? "-translate-y-0" : "-translate-y-full"
        }
          `}
      >
        <div className="bg-white border dark:border-[#31363D] dark:bg-[#20262d] rounded-lg fixed top-36 bottom-0 right-0 left-0 max-w-md mx-auto flex justify-start h-44  p-4">
          <div className="w-full flex flex-col justify-between">
            <div className="space-y-4">
              <div className="text-xl flex items-center space-x-3">
                <p>Are you sure delete,</p>
                {title && (
                  <p className="dark:bg-[#31363D] bg-gray-200 p-1 rounded-md">
                    {title}
                  </p>
                )}
                ?
              </div>
              <div className="flex space-x-3">
                <BsInfoCircle
                  className="dark:text-yellow-200 text-yellow-300"
                  fontSize={29}
                />
                <p className="text-sm leading-4 pt-1">
                  This will permanently delete the data, once the data is
                  deleted it cannot be undone!
                </p>
              </div>
            </div>

            <div className="flex  justify-end space-x-2" onClick={closeModal}>
              <button className="bg-[#8BA6C5] hover:dark:bg-[#8DA2BA] hover:bg-[#7EA1C9] dark:bg-[#5E7EA3] px-10 rounded-lg py-2 transition duration-300">
                Close
              </button>

              <button
                onClick={() => handleDelete(idTask)}
                className="bg-[#8BA6C5] hover:dark:bg-[#8DA2BA] hover:bg-[#7EA1C9] dark:bg-[#5E7EA3] px-10 rounded-lg py-2 transition duration-300"
              >
                Sure
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
