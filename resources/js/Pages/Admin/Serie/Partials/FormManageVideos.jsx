import React, { Fragment, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Card } from "@/Components/ui/card";
import { convertSecondsToMinutes } from "../../../../../lib/Helper";
import { IconPencil, IconTrash } from "@tabler/icons-react";
import ModalEditVideo from "./ModalEditVideo";
import { router } from "@inertiajs/react";
import axios from "axios";
import ConfirmDelete from "@/Components/ConfirmDelete";

function FormManageVideos({ serie, videos }) {
    const [selectedVideo, setSelectedVideo] = React.useState(null);
    const [orderedVideos, setOrderedVideos] = React.useState(videos);
    const [formModal, setFormModal] = React.useState(false);
    const [confirmDelete, setConfirmDelete] = React.useState(false);
    const handleDragEnd = (result) => {
        if (!result.destination) return;
        const items = Array.from(orderedVideos);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        setOrderedVideos(items);

        let destinationOrderNum =
            orderedVideos[result.destination.index].order_num;
        let sourceOrderNum = orderedVideos[result.source.index].order_num;

        axios
            .post(route("admin.videos.swap"), {
                destination_order_num: destinationOrderNum,
                source_order_num: sourceOrderNum,
                serie_id: serie.id,
            })
            .catch((error) => {
                console.log(error);
            });
    };

    // refresh data after delete and other action
    useEffect(() => {
        setOrderedVideos(videos);
    }, [videos]);

    return (
        <div>
            {selectedVideo && (
                <Fragment>
                    <ModalEditVideo
                        video={selectedVideo}
                        openModal={formModal}
                        setOpenModal={setFormModal}
                    />

                    <ConfirmDelete
                        text={`Apakah anda yakin ingin menghapus video ${selectedVideo?.title}?`}
                        urlDelete={`admin/videos/${selectedVideo?.id}`}
                        openConfirmDelete={confirmDelete}
                        setOpenConfirmDelete={setConfirmDelete}
                    />
                </Fragment>
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
                                {orderedVideos.map((video, index) => (
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
                                                        <h3 className="flex text-sm font-semibold gap-x-2  ">
                                                            <span>
                                                                {video.title}
                                                            </span>
                                                            <span
                                                                className={`px-1 text-xs font-mono py-1  ${
                                                                    video.is_free
                                                                        ? "bg-green-700"
                                                                        : "bg-blue-600"
                                                                } rounded-lg`}
                                                            >
                                                                {video.is_free
                                                                    ? "Free"
                                                                    : "Premium"}
                                                            </span>
                                                        </h3>
                                                        <span className="flex items-center text-sm font-semibold gap-x-2">
                                                            <span>
                                                                {convertSecondsToMinutes(
                                                                    video.seconds_time
                                                                )}
                                                            </span>
                                                            <button
                                                                onClick={() => {
                                                                    setSelectedVideo(
                                                                        video
                                                                    );
                                                                    setFormModal(
                                                                        true
                                                                    );
                                                                }}
                                                                className="text-accent-foreground"
                                                            >
                                                                <IconPencil className="w-4 h-4" />
                                                            </button>
                                                            <button
                                                                onClick={() => {
                                                                    setSelectedVideo(
                                                                        video
                                                                    );
                                                                    setConfirmDelete(
                                                                        true
                                                                    );
                                                                }}
                                                                className="text-red-500"
                                                            >
                                                                <IconTrash className="w-4 h-4" />
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
