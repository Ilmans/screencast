import React, { useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Card } from "@/Components/ui/card";
import { convertSecondsToMinutes } from "../../../../../lib/Helper";
import { IconPencil } from "@tabler/icons-react";
import ModalEditVideo from "./ModalEditVideo";

function FormManageVideos({ videos }) {
    const [selectedVideo, setSelectedVideo] = React.useState(null);
    const [formModal, setFormModal] = React.useState(false);
    const handleDragEnd = (result) => {
       // console.log(result);
    };

    useEffect(() => {
        if (selectedVideo !== null) {
            setFormModal(true);
        }
    }, [selectedVideo]);

    return (
        <div>
            {formModal && (
                <ModalEditVideo
                    video={selectedVideo}
                    openModal={formModal}
                    setOpenModal={setFormModal}
                />
            )}
            <Card className="p-2 ">
                <DragDropContext onDragEnd={handleDragEnd}>
                    <Droppable droppableId="videos">
                        {(provided) => (
                            <div
                                className=""
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                {videos.map((video, index) => (
                                    <Draggable
                                        key={video.order_num}
                                        draggableId={video.order_num.toString()}
                                        index={index}
                                    >
                                        {(provided) => (
                                            <div
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                ref={provided.innerRef}
                                            >
                                                <Card className="p-4 my-4">
                                                    <div className="flex items-center justify-between">
                                                        <h3 className="flex text-sm font-semibold gap-x-2 font-poppins">
                                                            <span>
                                                                
                                                            {video.title}
                                                            </span>
                                                            <span className={`px-1 text-xs font-mono py-1  ${video.is_free ? "bg-green-700" : "bg-blue-600"} rounded-lg`}>
                                                                {video.is_free ? "Free" : "Premium"}
                                                            </span>
                                                        </h3>
                                                        <span className="flex items-center text-sm font-semibold gap-x-2">
                                                            <span>
                                                                {convertSecondsToMinutes(
                                                                    video.seconds_time
                                                                )}
                                                            </span>
                                                            <button
                                                                onClick={() =>
                                                                    setSelectedVideo(
                                                                        video
                                                                    )
                                                                }
                                                                className="text-accent-foreground"
                                                            >
                                                                <IconPencil className="w-4 h-4" />
                                                            </button>
                                                        </span>
                                                    </div>
                                                    <a
                                                        href={`https://www.youtube.com/watch?v=${video.unique_video_id}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="block mt-2 text-xs underline text-accent-foreground"
                                                    >
                                                        https://www.youtube.com/watch?v=
                                                        {video.unique_video_id}
                                                    </a>
                                                    {/* Add other card content here */}
                                                </Card>
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </Card>
        </div>
    );
}

export default FormManageVideos;
